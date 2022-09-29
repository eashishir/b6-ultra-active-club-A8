import React from 'react';
import "./Question.css"

const Question = () => {
    return (
        <div className="question-part">
            <h2>Question Bank</h2>
            <div className='question-container'>
                <div className='que-1'>
                    <h1>How does react work?</h1>
                    <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
                </div>
                <div className='que-2'>
                    <h1>What are the differences between props and state?</h1>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>

                </div>

                <div className='que-3'>
                    <h1>What does useEffect do other than api load data?</h1>
                    <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.

                        Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)

                        All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.

                        In this post, we’re going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.

                    </p>

                </div>
            </div>
        </div>
    );
};

export default Question;