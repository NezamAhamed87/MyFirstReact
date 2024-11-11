import React, { useState } from "react";

function MainContent()
{
    const [showText, setShowText] = useState(false);

    const [isSpecialMessageVisible, setIsSpecialMessageVisible] = useState(false);


    // Sample data to display
    const features = [
        "Easy to use",
        "Fast performance",
        "Customizable design",
        "Built with React",
        "Interactive UI"
    ];

    const handleToggle = () => { 
        setShowText(!showText);
    }

    const toggleSpecialMessage = () => {
        setIsSpecialMessageVisible(!isSpecialMessageVisible);
    };

    return(
        <main>
            <h2>Welcome to the Main Content</h2>
            <p>This is where the main Content of the app will go.</p>

            <button onClick={handleToggle}>
                { showText ?'Hide Details':'Show Details'}
            </button>

            {showText && (
                <>
                    <p>Here are some key features of our app:</p>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>              
                </>
            )}

            {/* New button to show/hide special message */}
            <button onClick={toggleSpecialMessage} style={{ marginTop: '10px' }}>
                {isSpecialMessageVisible ? 'Hide Special Message' : 'Show Special Message'}
            </button>

            {/* Conditionally render the special message */}
            {isSpecialMessageVisible && (
                <p style={{ color: 'blue', fontWeight: 'bold' }}>
                    🎉 Congratulations! You've unlocked the special message! 🎉
                </p>
            )}
        </main>
    )
}

export default MainContent;