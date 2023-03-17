import Marvel from "../img/footer-Marvicon-194.png"

const Footer = () => {
    return (
      // <div className="Footer-contain">
       <div className="Footer">
        <div>
          <img alt="icon" src={Marvel} />
        </div>
       <div className="Block1">
          <p>ABOUT MARVEL</p>
          <p>HELP/FAQS</p>
          <p>CAREERS</p>
          <p>INTERNSHIPS</p>
       </div>
       <div className="Block2">
          <p>ADVERTISING</p>
          <p>DISNEY+</p>
          <p>MARVELHQ.COM</p>
          <p>REDEEM DIGITAL COMICS</p>
       </div>
       <div>
        <p>
          Made with <span>React</span> with <span>Le Reacteur</span> by{" "}
          <span>Priscil</span>{" "}
        </p>
       </div>
        
      </div> 
      // {/* </div> */}
      
    );
  };
  
  export default Footer;