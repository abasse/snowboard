var route = "";
window.addEventListener("load", () => {
    const router = new Navigo("/", { hash: true });
    const render = (content) =>
      (document.querySelector("#content").innerHTML = content);

    const loadPage = (page) =>  {
      fetch('./pages/'+page+'.html')
        .then(response => response.text())
        .then(data => {
          document.querySelector("#content").innerHTML = data;
        });
    }

    router
      .on("/about", (match) => {
        //console.log(match);
        route = match;
        loadPage('about');
      })
      .on("/products", (match) => {
        //console.log(match);
        route = match;
        render("Products " + JSON.stringify(match.params));
      })
      .on("/login", (match) => {
        //console.log(match);
        route = match;
        render("Login");
      })
      .on("/logout", (match) => {
        //console.log(match);
        route = match;
        loadPage("logout");
      })
      .on("/userlist", (match) => {
        //console.log(match);
        //  render("<my-counter></my-counter>");
        route = match;
        loadPage("userlistpage");
      })
      .on("/slotpage", (match) => {
        //console.log(match);
        route = match;
        loadPage('slotpage');
      })
      .on("/user", (match) => {
        //console.log(match);
        route = match;
        loadPage('user');
      })
      .on((match) => {
        //console.log(match);
        route = match;
        render("home");
      })
      .resolve();
  });