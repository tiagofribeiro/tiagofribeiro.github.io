type DirectionTypes = 'column' | 'row';

type AlignTypes = 'start'
| 'center' 
| 'end' 
| 'baseline' 
| 'safe';

type JustifyTypes = 'start'
| 'left'
| 'right'
| 'center'
| 'end'
| 'baseline'
| 'safe'
| 'space-around'
| 'space-evenly'
| 'space-between';

export interface FrameTypes {
    align?: AlignTypes;
    justify?: JustifyTypes;
    direction?: DirectionTypes;
    marginX?: number;
    marginY?: number;
    paddingX?: number;
    paddingY?: number;
    children?: React.JSX.Element | React.JSX.Element[];
}

export interface FrameStyledTypes {
    $align?: AlignTypes;
    $justify?: JustifyTypes;
    $direction?: DirectionTypes;
    $marginX?: number;
    $marginY?: number;
    $paddingX?: number;
    $paddingY?: number;
}