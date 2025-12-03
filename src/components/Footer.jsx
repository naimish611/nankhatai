import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <h3 className="footer-title">GJ 11 Homemade નાનખટાઈ</h3>

        <p className="footer-tagline">ઘર જેવી સ્વાદિષ્ટ નાનખટાઈ – 100% હોમમેડ</p>

     <p className="footer-address">
  📍 Address:{" "}
  <a
    href="https://www.google.com/maps?q=21.54066926030551,70.44736773660355"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "black", textDecoration: "underline" }}
  >
    Khodal Dham Township, Khalilpur Road, Mahadev Apartment no 405 , Junagadh
  </a>
</p>


        <a
          href="https://wa.me/918200497704?text=હેલો%20મને%20નાનખટાઈ%20ઓર્ડર%20કરવી%20છે"
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Order કરો
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} GJ 11 Homemade નાનખટાઈ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
