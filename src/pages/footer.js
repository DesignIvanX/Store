const Footer = () => {
    const view = `
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0F1111" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,85.3C672,75,768,117,864,133.3C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <div class="content-footer">
        <div class="c content-footer-card-info">
            <h2>CONTACT ME</h2>
            <p><i class="fas fa-phone"></i>641-754-0072</p>
            <p><i class="fas fa-envelope"></i>ivandcdesign@gmail.com</p>
            <p><i class="fas fa-map-marker-alt"></i>1718 Park Boulevard Marshaltown, IA 50118</p>
        </div>
        <div class="c content-footer-card-social">
            <h2>SOCIAL MEDIA</h2>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-instagram"></i>
        </div>
        <div class="c content-footer-card-newsletter">
            <h2 class="h2-newsletter">WEEKLY NEWSLETTER</h2>
            <input type="text" name="name" class="name" id="name" placeholder="Name" required>
            <input type="email" name="email" class="email" id="email" placeholder="Your Email" required>
            <button class="btn-newsletter-footer">SUBSCRIBE</button>
        </div>
    </div>
    <div class="foot-content">
        <h3>&copy;DesignIvanX all rigths reserved 2021</h3>
    </div>
    `
    return view;
}
export default Footer