import React, {Fragment} from 'react';

function About() {
    return(
        <Fragment>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Mauricio
                        <span className="text-primary">Ballesteros</span>
                    </h1>
                    <div className="subheading mb-5">
                        Cr 26a #11-36 · Bucaramanga Colombia · (+57) 317-757-4279 ·
                        <a href="mailto:name@email.com">mauriciokode@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I am an accomplished full stack developer with strong organizational skills and proven developer experience. My previous roles have demonstrated that I am a team player with excellent attention to detail and the ability to remain calm and be professional under pressure. I have experience in Python and OpenCV development, besides i have studies in C++, C, HTML5, CSS3 and Bootstrap.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/mauricio-ballesteros-rodriguez/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/renjirock/"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </Fragment>
    )
}

export default About;