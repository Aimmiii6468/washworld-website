import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Contact Us</h3>
          
          <a href="https://maps.app.goo.gl/wVfdXe871tYHFVLF6" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
            <MapPin className="w-5 h-5 mt-1 shrink-0 text-primary" />
            <span>150 Kenwood Ave.<br/>Toronto, ON M6C 2S3</span>
          </a>
          
          <a href="tel:+14166529274" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <span>(416) 652-9274</span>
          </a>
          
          <a href="mailto:order@curbsidelaundry.ca" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            <span>order@curbsidelaundry.ca</span>
          </a>
        </div>

        {/* Operating Hours */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Operating Hours</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex justify-between border-b border-border pb-1 text-lg"><span>Everyday</span> <span className="font-bold text-foreground">8:00 AM - 10:00 PM</span></li>
          </ul>
          <div className="bg-red-50 text-red-600 border border-red-100 px-3 py-2 rounded-lg mt-4 inline-flex items-center shadow-sm w-full transition-colors hover:bg-red-100">
            <p className="text-sm font-bold tracking-tight uppercase w-full flex justify-between"><span>* Last Wash</span> <span>9:00 PM</span></p>
          </div>
        </div>

        {/* Map Location */}
        <div className="space-y-4 h-full">
          <h3 className="text-xl font-bold text-foreground">Our Location</h3>
          <div className="w-full h-[180px] bg-muted rounded-xl border border-border flex items-center justify-center overflow-hidden relative shadow-inner">
            <iframe 
              src="https://maps.google.com/maps?q=Washworld+Coin+Laundry,+150+Kenwood+Ave,+Toronto&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Washworld Location"
            ></iframe>
          </div>
        </div>
        
      </div>
      
      <div className="bg-white py-6 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Washworld Coin Laundry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/policies" className="text-sm text-foreground hover:text-primary transition-colors font-medium">Store Policies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
