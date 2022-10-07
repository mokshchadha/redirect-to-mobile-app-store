import { RedirectToMobileAppStore } from "./component/RedirectToMobileAppStore";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Taking you to download page</div>
        <RedirectToMobileAppStore
          appStoreLink={"https://apps.apple.com/in/app/source-buy/id6443432457"}
          playStoreLink={"https://bit.ly/SourceOne_BuyerApp"}
          autoRedirect={true}
        />
      </header>
    </div>
  );
}

export default App;
