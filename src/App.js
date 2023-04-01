import './App.css';
//import logo from './img/torii_forest.jpg';


function App() {
  return (
    <div>
      <div>
          <nav class="navbar">
            <form class="form-inline">
              <a href="" class="Blog" > Blog</a>
              <button class="Signup" type="button">Signup</button>
              <button class="Login" type="button">Login</button>

            </form>
          </nav>
      </div>

      <div>
        <img src={require('./img/torii_forest.jpg')} class='forest' />
      </div>
      
      <div class='form'>
      <form class=""action="thank_you.html" method="">
        <table>
            <tr>
                <td><label>Your Name:</label></td>
                <td><input type="text" name=""/></td>
            </tr>
            <tr>
                <td><label>Email:</label></td>
                <td><input type="email"/></td>
            </tr>
            <tr>
                <td><label>Password:</label></td>
                <td><input type="password"/></td>
            </tr>
        </table>
        
        <input type="submit" name="" id=""/>

      </form>









        
      </div>


    </div>  
  );
}

export default App;
