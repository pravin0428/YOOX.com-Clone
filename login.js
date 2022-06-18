function login(){
    return `<div class="bg-model">
    <div class="model-content">
        <div class="close">+</div>
        <div>
            <span>
                It’s great to see you again.
            </span>
        </div>
        <div>
            <span>Log in with</span>
            <button id="login-facebook-button"></button>
            <button id="login-google-button"></button>
        </div>
        <div>
            <span>or with your e-mail address</span>
            <form action="" id="form">
                <input type="email" placeholder="E-MAIL" id="loginEmail">
                <input type="password" placeholder="PASSWORD" id="loginPass">
                <div id="checkbox">
                    <input type="checkbox">
                    <span>REMEMBER ME</span>
                </div>
                <a href="">Forgot your password</a>
                <input type="submit" id="submit-button">
                <div>
                    <span>
                        For more information, please consult the 
                    </span>
                    <a href="https://www.yoox.com/legal/PrivacyPolicy" target="_blank">Privacy Policy</a>
                </div>
            </form>
        </div>
        <div>
            <span>
                ARE YOU NEW TO YOOX?
            </span>
            <a href="*/*">Register now</a>
        </div>
    </div>
</div>`
}

export default login;