import name from "../images/name.png";

function Footer() {
    return (
        <footer className="p-4 bg-black text-white">
            <img className="w-60 mx-auto" src={name} alt="company name" />
            <div className="h-[2px] my-4 w-full bg-white" />
            <article className="flex flex-wrap w-full text-sm font-light justify-around">
                <section>
                    <h3 className="text-lg font-bold mb-3 tracking-widest">Learn</h3>
                    <ul>
                        <li><button className="mb-1" type="button">About Us</button></li>
                        <li><button className="mb-1" type="button">Careers</button></li>
                        <li><button className="mb-1" type="button">Customers</button></li>
                        <li><button className="mb-1" type="button">Newsroom</button></li>
                        <li><button className="mb-1" type="button">Press Kit</button></li>
                    </ul>
                </section>
                <section>
                    <h3 className="text-lg font-bold mb-3 tracking-widest">Contact</h3>
                    <ul>
                        <li><button className="mb-1" type="button">General Inquiries</button></li>
                        <li><button className="mb-1" type="button">Sales</button></li>
                        <li><button className="mb-1" type="button">Press</button></li>
                        <li><button className="mb-1" type="button">Email</button></li>
                        <li><button className="mb-1" type="button">Discord</button></li>
                    </ul>
                </section>
                <section>
                    <h3 className="text-lg font-bold mb-3 tracking-widest">Learn</h3>
                    <ul>
                        <li><button className="mb-1" type="button">Overview</button></li>
                        <li><button className="mb-1" type="button">Newsletter</button></li>
                        <li><button className="mb-1" type="button">Blog</button></li>
                    </ul>
                </section>
            </article>

        </footer>
    )
}

export default Footer;
