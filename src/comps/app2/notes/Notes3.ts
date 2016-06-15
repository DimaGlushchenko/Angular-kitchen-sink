import {Component} from '@angular/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {Minitab} from "../../minitabs/Minitab";
import {Minitabs} from "../../minitabs/Minitabs";
import {StarWarsSearch} from "./StarWarsSearch";
import {WikiSearch} from "./WikiSearch";
import {InfinityScroll} from "./InfinityScroll";
import {Clock} from "./Clock";
import {MultiSlotTransclusion} from "./MultiSlotTransclusion";
import {CompFactory} from "./CompFactory";

@Component({
    selector: 'Notes3',
    directives: [Minitab, Minitabs, StarWarsSearch, WikiSearch, InfinityScroll, Clock, MultiSlotTransclusion, CompFactory],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes3 component</small>
                <!-- style is really cool as we can externally style components via ngStyle -->
                 <mini-tabs [style]="{'color': '#333333', 'backgroundColor': 'dodgerblue'}">
                  <mini-tab [tabTitle]="'Code 1'">
                    <h3>example of http search</h3>
                    <StarWarsSearch></StarWarsSearch>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 2'">
                    <h3>example of wiki search</h3>
                     <WikiSearch></WikiSearch>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 3'">
                    <h3>infinity scroll</h3>
                     <InfinityScroll></InfinityScroll>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 4'">
                    <h3>Clock</h3>
                     <Clock></Clock>
                  </mini-tab>       
                  <mini-tab [tabTitle]="'Code 5'">
                    <h3>Multi Slot Transclusion</h3>
                    <MultiSlotTransclusion>
                    <h1>THIS WILL NOT APPEAR ANYWHERE AS NO MATCHING TAG EXISTS ON H1</h1>
                    <h1 header>This is a Heading</h1>
                      <p body>This is body</p>
                      <div footer>
                        <hr>
                        <h3>This is a footer</h3>
                      </div>
                    </MultiSlotTransclusion>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 6'">
                    <h3>Dynamic component factory</h3>
                    <CompFactory></CompFactory>
                  </mini-tab>
                  <mini-tab tabTitle="Code 7">Code 7 Content</mini-tab>
                  <mini-tab tabTitle="Code 8">Code 8 Content</mini-tab>
                  <mini-tab tabTitle="Code 9">Code 9 Content</mini-tab>
                  <mini-tab tabTitle="Code 10">Code 10 Content</mini-tab>
                </mini-tabs>
                <small>I am a Minitab component (@ContentChildren)</small>
                <ng-content></ng-content>`
})

export class Notes3 extends NotesBase {
    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes4';
        this.slideRight = 'notes2';
    }
}


