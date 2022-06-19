function navbar() {
    return `
    <div class="cl1">
            <select name="" id="">
                <option value="">United States</option>
                <option value="">Armenia</option>
                <option value="">Georgia</option>
            </select>
            <a href="">CUSTOMER CARE</a>
            <p>FREE STANDARD SHIPPING ON ORDERS OVER $200</p>
            <div>
                <ion-icon name="pencil-outline"></ion-icon> <a href="./register.html">REGISTER</a>
            </div>
            <div>
                <button id="button">LOGIN</button>
            </div>
    </div>
        <div class="cl2">
            <div>
                <a href="index.html">WOMAN</a>
                <a href="man.html">MAN</a>
                <a href="kids.html">KIDS</a>
                <P>/</P>
                <a href="art.html">DISINE+ART</a>
            </div>

            <h1>
                <font color="red">Y</font>
                <font color="yellow">O</font>
                <font color="green">O</font>
                <font color="aqua">X</font>
            </h1>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="bag-handle-outline"></ion-icon>
        </div>
        <div class="cl3">
            <div>
                <p>New arrivals</p>
                <p>Designers</p>
                <p>Clothing</p>
                <p>YooxGen</p>

                <p>COLLABORATIONS</p>

            </div>
        </div>
        `
}
function footer() {
    return `
    // <div class="last1">
            <div>
                <h3>NEW TO YOOX</h3>
                <hr>
                <a>Shopping guide</a><br><br>
                <a>iPhone/iPad/Android</a><br><br>
                <a>Browse all Designers</a><br><br>
                <a>Browse all Categories</a><br><br>
            </div>
            <div>
                <h3>HELP</h3>
                <hr>
                <a href="">Shipping times & costs</a><br><br>
                <a href=""> Payments and web security</a><br><br>
                <a href="">Product quality</a><br><br>
                <a href="">Track your order</a><br><br>
                <a href="">Returns & refunds</a><br><br>
                <a href="">FAQs</a><br><br>
                <a href="">Size Guide</a><br><br>
            </div>
            <div class="signup">
                <ion-icon name="mail-outline"></ion-icon>
                <h3>YOOX NEWS</h3>
                <p>Sign up for the newsletterand discover the latest arrivals and promotions</p>
                <input class="submit" type="email" placeholder="INSERT YOUR E-MAIL ADDRESS">
                <div>
                    <div>
                        <input id="roundcheck" type="checkbox">
                        <p>Woman</p>
                    </div>
                    <div>
                        <input id="roundcheck" type="checkbox">
                        <p>Man</p>
                    </div>
                </div>
                <div class="check">
                    <input type="checkbox">
                    <p>I consent to receive YOOX newsletters via email. For further information, please consult the <a
                            href="">Privacy Policy</a>.</p>

                </div>
                <input class="btn" type="submit" placeholder="SIGN UP">
            </div>

            <div>
                <h3>MYOOX</h3>
                <hr>
                <a href="login.html">Login</a><br><br>
                <a href="">My Orders</a><br><br>
                <a href="">My Details</a><br><br>
                <a href="">Dream Box</a><br><br>
                <a href="">Première</a><br><br>
            </div>
            <div>
                <h3>ABOUT US</h3>
                <hr>
                <a href="">Company Info</a><br><br>
                <a href="">Press</a><br><br>
                <a href="">Affiliation</a><br><br>
                <a href="">Careers</a><br><br>
            </div>
        </div>
        <div class="last2">
            <div>
                <p>CONNECT WITH US</p>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-pinterest-p"></i>
                <i class="fab fa-tiktok"></i>

            </div>
            <div>
                <i class="fas fa-tablet-alt"></i>
                <p>DOWNLOAD THE APP FOR iOS / ANDROID</p>
            </div>
        </div>
        <div class="last3">
            <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS
                RESERVED - SIAE LICENCE # 401/I/526</p>
            <p></p><a href="">LEGAL AREA </a> / <a href="">PRIVACY POLICY</a></p>
        </div>`
}

export { navbar, footer }