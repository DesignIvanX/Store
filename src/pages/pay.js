const Pay = () => {
    const view = `
    <section class="payment-section-shop">
        <h2>PAYMENT CHECKOUT</h2>
        <span><i class="fab fa-cc-visa"></i></span>
        <span><i class="fab fa-cc-mastercard"></i></span>
        <span><i class="fab fa-bitcoin"></i></span>
        <div class="content-payment">
            <label>NAME</label>
            <input type="text" name="name" id="name" placeholder="Brian York">
            <label>NUMBER</label>
            <input type="text" name="number" id="number" placeholder="1234 - 5678 - 6101 - 1234">
            <label>EXP DATE</label>
            <input type="text" name="exp-date" id="exp-date" placeholder="17 / 34">
            <label>CVC</label>
            <input type="password" name="password" id="password" placeholder="234">
            <h2 class="subtotal-produts">Subtotal(0 produts): $0</h2>
            <button class="btn-payment-make">Make a payment</button>
        </div>
    </section>
    `;
    return view;
}
export default Pay