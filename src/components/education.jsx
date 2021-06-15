import React, {Fragment} from 'react';

function Education() {
    return(
        <Fragment>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">industrial university of santander</h3>
                            <div className="subheading mb-3">Bachelor of Science</div>
                            <div>electronic Engineering</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">july 2015 - present</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </Fragment>
    )
}

export default Education;