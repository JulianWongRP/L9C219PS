import React, { useState } from "react";


export default function FAQ() {

    const [activeQuestion, setActiveQuestion] = useState(null);


    const toggleAnswer = (index) => {
        if (activeQuestion === index) {
            setActiveQuestion(null); 
        } else {
            setActiveQuestion(index); 
        }
    };

    return (
        <div className="container">
            <h1> FAQ Section</h1>

            <div className="Qns">
                <div className="question">
                    <h4 onClick={() => toggleAnswer(0)}>
                        About SOI
                        <span className={`arrow ${activeQuestion === 0 ? "open" : ""}`}>▼</span>
                    </h4>
                    {activeQuestion === 0 && (
                        <p>
                            Welcome to the RP School of Infocomm (SOI) – the perfect launch pad for you to kick-start your career in the dynamic field of information communications (infocomm)!
                            <br />
                            We offer a comprehensive range of diplomas spanning the entire infocomm landscape. Our academic modules are crafted with inputs from major industry players and government agencies, and our dedicated team of staff regularly engage in research and development (R&D) work to ensure you are kept up to date on the latest trends and applications.
                            <br />
                            All our diplomas at RP lead to a relevant degree with top universities in Singapore and overseas, and enjoy on average a year of advanced standing.
                            <br />
                            And many of our courses also grant you the opportunity to gain industry-recognised certifications, such as the Cisco Certified Network Associate (CCNA) and Information Technology Infrastructure Library Foundation (ITIL) certifications, which will enhance your employability after graduation.
                            <br />
                            At SOI, we make learning fun, active and engaging. Our Problem-based Learning (PBL) approach goes beyond listening to lectures and memorising facts.
                            <br />
                            We believe the best way to learn is to roll up your sleeves and jump in. Each of our diploma courses contains a practical element, providing you with a plethora of hands-on experiences and real-life learning opportunities to prepare you for the workplace even before you graduate.
                            <br />
                            Hone your critical thinking and problem-solving skills by working on real-world challenges and devising innovative solutions to complex problems.
                            <br />
                            Chart out theories or invent your own technology and solution to real-world needs in our well-equipped, state-of-the-art training and R&D facilities, designed in close collaboration with leading tech companies such as Samsung and RSA.
                            <br />
                            Participate in educational overseas trips as well as internships with our growing network of over 300 industry partners that include leading companies from the IT, healthcare, banking and finance, and telecommunications sectors.
                            <br />
                            Take part in close to 100 exciting co-curricular activities, and practise and use the knowledge and skills you learn in the classroom to address genuine community needs on our Service-Learning Projects.
                            <br />
                            So whether you plan to further your studies or work straightaway after poly, we will groom you with the necessary skill and know-how to jump straight into the exciting infocomm field by the time you graduate.
                            <br />
                            If you are excited by the latest technological advancements and have a passion for problem-solving, join us at SOI!
                        </p>
                    )}
                </div>

                <div className="question">
                    <h4 onClick={() => toggleAnswer(1)}>
                        Industry
                        <span className={`arrow ${activeQuestion === 1 ? "open" : ""}`}>▼</span>
                    </h4>
                    {activeQuestion === 1 && (
                        <p>
                            At RP School of Infocomm (SOI), we don’t just teach basic IT skills and knowledge.
                            <br />
                            We also support the industry by producing well-rounded workplace-ready interns who are able to support and contribute to companies even before they graduate.
                            <br />
                            Besides our primary focus on education, we also foster strong partnerships between academia and industry, supporting other enterprises and Singapore’s Smart Nation vision through our extensive research and development work.
                            <br />
                            Harness our technical expertise and help us in return to nurture the next generation of infocomm leaders and change-makers by sponsoring current and future SOI students.
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}
