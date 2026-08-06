import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Form from '../compunantContact/ContactForm'
import Whatsapp from "../compunentIndex/Whatsapp";
import Footer from "../compunentIndex/Footer";

import Nab from "../compunentIndex/nabs";

export default function IT(){
    return(
        <div>
<Navbar />
<Whatsapp />
<Nab />
<Form />
<Footer />
        </div>
    )
}
