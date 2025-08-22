const AboutPage = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">About ShopSphere</h1>
            <p className="text-lg text-gray-700 mb-6">
                Welcome to ShopSphere, your one-stop destination for the latest in electronics, fashion, and lifestyle accessories. Our mission is to provide you with a curated selection of high-quality products, delivered with an exceptional online shopping experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Story</h2>
            <p className="text-gray-600 mb-6">
                Founded in 2025, ShopSphere started as a small project fueled by a passion for technology and design. We saw a need for an e-commerce platform that not only sold products but also told a story. We believe that every item, whether it's a new smartphone or a simple t-shirt, is a part of your personal journey. We've grown since our humble beginnings, but our core values of quality, customer satisfaction, and innovation remain the same.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Shop With Us?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Curated Selection:</strong> We hand-pick every item in our store to ensure it meets our high standards of quality and style.</li>
                <li><strong>Customer First:</strong> Your satisfaction is our top priority. Our support team is always here to help with any questions or concerns.</li>
                <li><strong>Fast & Reliable Shipping:</strong> We partner with top logistics companies to get your order to you quickly and safely.</li>
                <li><strong>Secure Checkout:</strong> Shop with confidence knowing that your data is protected with industry-leading security standards.</li>
            </ul>
        </div>
    );
};

export default AboutPage;