import React from 'react'

function Ebookform() {
  return (
    <div>
        <form>                        
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="contact-form">
                        <label>First Name <span>*</span></label>
                        <input type="text" id=""name="fullName" className="inputfield"/>    
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="contact-form">
                        <label>Last Name <span>*</span></label>
                        <input type="text" id=""name="fullName"className="inputfield"/>    
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="contact-form">
                        <label>Email <span>*</span></label>
                        <input type="email" id=""name="email"  className="inputfield" />
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                    <input type="submit" value="Submit"   className="submitButton"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Ebookform