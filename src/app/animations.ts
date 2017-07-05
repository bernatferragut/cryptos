import {    trigger, state, style, transition, animate, keyframes,
            AnimationEntryMetadata } from '@angular/core';

            export const routerTransition: AnimationEntryMetadata = ([

                trigger('routerTransition', [
                    //STATES
                    state('void', style( {position: 'absolute', width: '100%', height: '100%', opacity: '0'} )), // when is not there
                    state('*', style( {position: 'absolute', width: '100%', height: '100%', opacity: '1'} )), // when is there in any state
                    //TRANSITION-ENTER
                    transition(':enter', [ // whenever we enter the page
                        style( {transform: 'translateY(20%)', opacity: '0'} ),
                        animate('0.7s ease-in-out', style( {transform: 'translateY(0%)', opacity: '1'} ))
                    ]),
                    //TRANSITION-LEAVE
                    transition(':leave', [ // whenever we enter the page
                        style( {transform: 'translateY(0%)', opacity: '1'} ),
                        animate('0.7s ease-in-out', style( {transform: 'translateY(-20%)', opacity: '0'} ))
                    ])
                ])
            ]);