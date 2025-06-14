import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*ai-solutions-blog-details section 1*/}
            <section className="ai-solutions-blog-details-section-1 position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card-contact card rounded-4 position-relative h-100" data-aos="fade-up" data-aos-delay={0}>
                                <Link href="#" className="card-contact-img position-relative d-block zoom-img rounded-3 rounded-bottom-0 overflow-hidden">
                                    <img className="w-100" src="assets/imgs/pages/ai-solutions/page-contact/img-1.png" alt="NazraSoft" />
                                </Link>
                                <div className="card-contact-body p-4 d-flex flex-column">
                                    <div className="card-contact-info mt-2 mb-auto">
                                        <Link href="#">
                                            <h6>Email Address</h6>
                                        </Link>
                                        <p className="mb-0">Sent mail asap anytime</p>
                                        <p className="mb-0">info@nazrasoftware.com</p>
                                        <p className="mb-0">career@nazrasoftware.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-contact card rounded-4 position-relative h-100" data-aos="fade-up" data-aos-delay={200}>
                                <Link href="#" className="card-contact-img position-relative d-block zoom-img rounded-3 rounded-bottom-0 overflow-hidden">
                                    <img className="w-100" src="assets/imgs/pages/ai-solutions/page-contact/img-2.png" alt="NazraSoft" />
                                </Link>
                                <div className="card-contact-body p-4 d-flex flex-column">
                                    <div className="card-contact-info mt-2 mb-auto">
                                        <Link href="#">
                                            <h6>Phone Number</h6>
                                        </Link>
                                        <p className="mb-0">Call us</p>
                                        <p className="mb-0">91-9470099622</p>
                                        <p className="mb-0">+(91) 74-8897-0171</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-contact card rounded-4 position-relative h-100" data-aos="fade-up" data-aos-delay={400}>
                                <Link href="#" className="card-img-top position-relative d-block zoom-img rounded-3 rounded-bottom-0 overflow-hidden">
                                    <img className="w-100" src="assets/imgs/pages/ai-solutions/page-contact/img-3.png" alt="NazraSoft" />
                                </Link>
                                <div className="card-contact-body p-4 d-flex flex-column">
                                    <div className="card-contact-info mt-2 mb-auto">
                                        <Link href="#">
                                            <h6>Whatsapp</h6>
                                        </Link>
                                        <p className="mb-0">Discuss your idea on whatsapp too</p>
                                        <p className="mb-0">91-9470099622</p>
                                        <p className="mb-0">+(91) 74-8897-0171</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid wow img-custom-anim-top pt-90">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279991725!2d-74.1444877707482!3d40.697631233381586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1729152035449!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </section>
        </>
    );
}
