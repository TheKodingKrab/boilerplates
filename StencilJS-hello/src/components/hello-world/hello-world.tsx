import {Component, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
    tag: 'hello-world',
    shadow: true
})
export class HelloWorld {
    @Prop() name: string;
    @Prop() showButton: boolean;

    @Event() sayName: EventEmitter;

    onButtonClick = () => {
        this.sayName.emit(this.name);
    }

    render() {
        return(
            <div>
                <p>Hello, {this.name}!</p>
                <p><button type="button" onClick={this.onButtonClick}>Say name</button></p>
            </div>
        );
    }
}
