/*
 * Copyright © 2018-20 LiquidPlayer
 *
 * Released under the MIT license.
 * See https://github.com/LiquidPlayer/LiquidCore/LICENSE.md for terms.
 */

const AStatus = {
    Good: 'Good',
    Moderate: 'Moderate',
    Unhealthy1: 'Sensitive',
    Unhealthy: 'Unhealthy',
    VeryUnhealthy: 'Very Unhealthy',
    Hazardous: 'Hazardous'
}

const statusMap = {
    "Good": "Air quality is considered satisfactory, and air pollution poses little or no risk",
    "Moderate": "There may be a moderate health concern for people being sensitive to air pollution.",
    "Sensitive": "Childrent and people with respiratory disease may experience health effects.",
    "Unhealthy": "Everyone experience health effects.",
    "Very Unhealthy": "Health warnings of emergency conditions. The entire population is affected.",
    "Hazardous": "Health alert: everyone may experience more serious health effects"
}

var aqiWAppReqId = 0;

setInterval(function() {}, 1000)

LiquidCore.on('ping', function() {

});

LiquidCore.on('response', function(payload) {
    console.log("Receive response, payload=" + JSON.stringify(payload))

    var reqType = payload.type;

    if (reqType == 'one_time_gps_data') {
        // Should check req_uuid first

        var axios = require('axios');
        axios.get(`https://api.airvisual.com/v2/nearest_city?key=ce2d6b01-2c31-457a-b3f3-80fb400d8901&lat=${payload.lat}&lon=${payload.long}`)
            .then(function (response) {
            // handle success
            // var aqi = response.data.data.aqi;
            var aqi = response.data.data.current.pollution.aqius;
            var status = AStatus.Good
            if (aqi >= 0 && aqi <= 50) {
                status = AStatus.Good
            } else if (aqi >= 51 && aqi <= 100) {
                status = AStatus.Moderate
            } else if (aqi >= 101 && aqi <= 150) {
                status = AStatus.Unhealthy1
            } else if (aqi >= 151 && aqi <= 200) {
                status = AStatus.Unhealthy
            } else if (aqi >= 201 && aqi <= 300) { 
                status = AStatus.VeryUnhealthy
            } else {
                status = AStatus.Moderate
            }

            var bleData={
                 index: {
                    status: status,
                    aqi: aqi,
                    location: response.data.data.city
                 }
                }

            console.log("Request send_ble_response_data, bleData=" + bleData)
            LiquidCore.emit('request', {
                type:'send_ble_response_data',
                req_uuid: Math.random().toString(),
                req_id: aqiWAppReqId,
                data: bleData
            })
        }).catch(function (error) {
            // handle error
            console.log(error);
        }).then(function () {
            // always executed
        });
    } else if (reqType == 'send_ble_response_data') {
        // check if send BLE success or not
    }
});

LiquidCore.on('event', function(payload) {
    console.log("Receive event, payload=" + JSON.stringify(payload))

    var eventType = payload.type;

    if (eventType == 'wapp_req') {
        var reqType = payload.req;
        if (reqType == 'aqi_info') {
            aqiWAppReqId = payload.req_id;

            console.log("Request one_time_gps_data")
            var result = LiquidCore.emit('request', {
                type:'one_time_gps_data',
                req_uuid: Math.random().toString()
            })
            console.log("Requested one_time_gps_data " + result.toString())
        } else if (reqType == 'get_desc') {
            var bleData={
                 status_desc: {
                    status: payload.status,
                    desc: statusMap[payload.status]
                 }
                }

            console.log("Request send_ble_response_data, bleData=" + bleData)
            LiquidCore.emit('request', {
                type:'send_ble_response_data',
                req_uuid: Math.random().toString(),
                req_id: payload.req_id,
                data: bleData
            })
        }
    }
});

// Ok, we are all set up.  Let the host know we are ready to talk
LiquidCore.emit( 'ready' )
