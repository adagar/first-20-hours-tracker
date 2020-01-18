import React, { Component } from 'react'

export default class AddSkill extends Component {
    render() {
        return (
            <div>
                <div class="center">
                    <a class="btn-floating btn-small add-btn sidenav-trigger" data-target="side-form">
                    <i class="material-icons">note_add</i>
                    </a>
                </div>

                <div id="side-form" class="sidenav side-form">
                    <form class="add-skill container section">
                        <h6>New Skill</h6>
                        <div class="divider"></div>
                            <div class="input-field">
                                <input placeholder="e.g. Drawing" id="skill-content" type="text" class="validate" />
                                <label for="skill-content">I want to learn:</label>
                            </div>
                            <div class="input-field">
                                <input placeholder="e.g. Course, Video, Book"id="skill-resource" type="text" class="validate" placeholder="e.g. Class, book, video" />
                                <label for="skill-resource">Resources:</label>
                            </div>
                        <div class="input-field center">
                            <button class="btn-small">Start Learning!</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
