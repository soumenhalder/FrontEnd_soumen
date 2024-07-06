// src/components/
import React from 'react';
import './ModelSect.css'

const ModelSect = () => {
    return (
        <main className='hero'>
            <div classname='hero-content'>
            <p>
                গাড়িটা বাড়িটা পণ হিসাবে যদি না পান, 
                বউমার সারা গায়ে ঢেলে দিন, 
            </p>
            <h1>সুরভিত পুরো এক টিন কেরোসিন</h1>
            </div>

            <div classname='hero-image'><img src='/images/kerosine.png' alt='kerosine'/>
            </div>
            <div classname='hero-content'>
            <p>
                বধুমরণ কেরোসিন, বউগণ আবার পণ 
            </p>
            </div>

            <div className='contact'>
                <div>কিনতে হলে স্বত্বর যোগাযোগ করুন</div>
                <div className='market-logos'>
                    <div className='market-logo'><img src='/images/amazon.svg' alt='amazon'/></div>
                    <div className='market-logo'><img src='/images/flipkart.png' alt='flipkart'/></div>
                </div>
             </div>
        </main>
    );
};
export default ModelSect