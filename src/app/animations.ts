import {    trigger, state, style, transition, animate, keyframes,
            AnimationEntryMetadata } from '@angular/core';

            export const routerTransition: AnimationEntryMetadata = ([

                trigger('routerTransition', [
                    state('void', style( {position: 'absolute', width: '100%', height: '100%', opacity: '0'} )),
                    state('*', style( {position: 'absolute', width: '100%', height: '100%', opacity: '1'} )),
                ])
            ]);

            