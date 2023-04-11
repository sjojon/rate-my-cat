function headerView() {
  return /*HTML*/ `
    <div id="navbar">
    <button onclick="home()"><i class="fa-solid fa-house"> Home</i></button>
    <button onclick="profile()"><i class="fa-solid fa-user"> Profile</i></button>
    <button onclick="rating()"><i class="fa-solid fa-star"> Rating</i></button>
    <button onclick="top3()"><i class="fa-solid fa-medal"> Top 3</i></button>
    <button onclick="login()"><i class="fa-solid">Logg inn</i></button>
    <p>
    <i class="fa-regular fa-star-half">
    Rate my cat
    </i>
    <i class="fa-regular fa-star-half fa-flip-horizontal"></i>
    </p>
    </div>`;
}