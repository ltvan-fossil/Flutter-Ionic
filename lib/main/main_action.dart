part of 'main.dart';

extension MainAction on _MyHomePageState {
  void _gotoWebView(String title) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => IonicWebView(
          title: title,
        ),
      ),
    );
  }
}
