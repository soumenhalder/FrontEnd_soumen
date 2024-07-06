// src/components/BlockLayout.js

import React from 'react';
import './BlockLayout.css';

const BlockLayout = () => {
    return (
        <nav>
            <div  className='logo'><img src='/images/logo.png' alt='logo'/>
            </div>
            <ul>
                <li href='#'>তালিকা</li>
                <li href='#'>অবস্থান</li>
                <li href='#'>আমাদের সম্বন্ধে</li>
                <li href='#'>যোগাযোগ</li>
            </ul>
            <button>
                login
            </button>
        </nav>
    );
};

export default BlockLayout;
