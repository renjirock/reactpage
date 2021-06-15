import React, {Fragment} from 'react';

function Awards() {
    return(
        <Fragment>
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            COMPETENCIAS TIC en la línea temática de Levantamiento de Información y Georreferenciación - Colnodo
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Responsive Web Design - freeCodeCamp
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Unit Testing with Python - Pluralsight
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            HTML, JavaScript, & Bootstrap - Certification Course  - Udemy
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            EF SET Certificate - EF Standard English Test (EF SET) 
                        </li>
                    </ul>
                </div>
            </section>
        </Fragment>
    )
}

export default Awards;