import React, { Component } from 'react'

export default class WeeklyFeedback extends Component {
    render() {
        return (
            <div>
                <h1>Ironhack Weekly Survey</h1>

                <h3>Please enter your name:</h3>
                <input type="text" />

                <h3>Choose the current week</h3>
                <div>
                    <input type="radio" id="week1" name="CurrentWeek" value="Week1" />
                    <label htmlFor="week1"> => Week 1</label>
                </div>
                <div>
                    <input type="radio" id="week2" name="CurrentWeek" value="Week2" />
                    <label htmlFor="week1"> => Week 2</label>
                </div>
                <div>
                    <input type="radio" id="week3" name="CurrentWeek" value="Week3" />
                    <label htmlFor="week1"> => Week 3</label>
                </div>
                <div>
                    <input type="radio" id="week4" name="CurrentWeek" value="Week4" />
                    <label htmlFor="week1"> => Week 4</label>
                </div>
                <div>
                    <input type="radio" id="week5" name="CurrentWeek" value="Week5" />
                    <label htmlFor="week1"> => Week 5</label>
                </div>
                <div>
                    <input type="radio" id="week6" name="CurrentWeek" value="Week6" />
                    <label htmlFor="week1"> => Week 6</label>
                </div>
                <div>
                    <input type="radio" id="week7" name="CurrentWeek" value="Week7" />
                    <label htmlFor="week1"> => Week 7</label>
                </div>
                <div>
                    <input type="radio" id="week8" name="CurrentWeek" value="Week8" />
                    <label htmlFor="week1"> => Week 8</label>
                </div>

                
            </div>
        )
    }
}
