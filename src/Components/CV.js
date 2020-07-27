import React, { Component } from 'react';
class CV extends Component {
    render() {
        return (
            <div className='pdf'>
                <a href="/static/media/Yiwen_CV_Eng.pdf" class="image fit"><img src="images/marr_pic.jpg" alt=""/>Download Yiwen's CV PDF (English Version)</a><br></br>
                <a href="/static/media/Yiwen_CV_Chn.pdf" class="image fit"><img src="images/marr_pic.jpg" alt=""/>Download Yiwen's CV PDF (Chinese Version)</a><br></br>
            </div>
        )
    }
}

export default CV;