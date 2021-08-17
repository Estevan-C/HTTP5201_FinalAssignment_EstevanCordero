import './style.scss'
import './midnight-green.scss'


document.querySelector('#nav').innerHTML = `
  <nav>
  <header><a href="#">Final Assignment</a> <label for="nav"><i class="fas fa-bars"></i></label></header>
  <input type="checkbox" id="nav" hidden checked>
  <div overflow>
      <ul>
          <!--active link in navbar with active attribute-->
          <li><a href="index.html">Home</a></li>
          <li><a href="quality_assurance.html">Quality Assurance</a></li>
          <li><a href="security.html">Security Page</a></li>
          <li><a href="bad_example.html">Bad Example Page</a></li>
      </ul>
  </div>
</nav>
`; 
// Seperate with ;
// You can make addition query selector in here for class or ids.
// use npm run dev if you want to see changes, 
// npm run build && npm run serve will build and run it, and show what is like in a live server.