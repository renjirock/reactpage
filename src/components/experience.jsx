import React, {Fragment} from 'react';

function Experience() {
    return(
        <Fragment>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">PHP Engineer</h3>
                            <div className="subheading mb-3">Du Brands</div>
                            <p>Programming and development of functionalities (PHP), design of data model of solutions, implementation and support of solutions, management of incidents and evolutionary requirements of the system, periodic code reviews, support and leadership in the execution of development projects.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">february 2021 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Full Stack Developer</h3>
                            <div className="subheading mb-3">GÓMEZ S.A.S.</div>
                            <p>The development of software projects, including programming tasks, creation unit testing, server configuration, project deployment and web platforms, among others. The development of computer tasks and digital tools. The creation of documentation related to the other tasks.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">october 2020 - february 2021</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Junior Web developer</h3>
                            <div className="subheading mb-3">Valin Consultores Empresariales</div>
                            <p>Custom Software Development, such as web platforms or Chat Bot, Database design and implementation, Performing software quality unit tests.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2020 - September 2020</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Engineer</h3>
                            <div className="subheading mb-3">Smart Data & Automation</div>
                            <p>Custom Software Development, such as web platforms or Chat Bot, Database design and implementation, Performing software quality unit tests.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2020 - September 2020</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </Fragment>
    )
}

export default Experience;