"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),utils_1=require("./utils"),CarouselItems=function(_a){var props=_a.props,state=_a.state,goToSlide=_a.goToSlide,clones=_a.clones,notEnoughChildren=_a.notEnoughChildren,itemWidth=state.itemWidth,children=props.children,infinite=props.infinite,itemClass=props.itemClass,itemAriaLabel=props.itemAriaLabel,partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,_b=utils_1.getInitialState(state,props),flexBisis=_b.flexBisis,shouldRenderOnSSR=_b.shouldRenderOnSSR,domFullyLoaded=_b.domFullyLoaded,partialVisibilityGutter=_b.partialVisibilityGutter;return _b.shouldRenderAtAll?(partialVisbile&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),React.createElement(React.Fragment,null,(infinite?clones:React.Children.toArray(children)).map(function(child,index){return React.createElement("li",{key:index,"data-index":index,onClick:function(){props.focusOnSelect&&goToSlide(index)},"aria-hidden":utils_1.getIfSlideIsVisbile(index,state)?"false":"true","aria-label":itemAriaLabel||(child.props.ariaLabel?child.props.ariaLabel:null),style:{flex:shouldRenderOnSSR?"1 0 "+flexBisis+"%":"auto",position:"relative",width:domFullyLoaded?((partialVisbile||partialVisible)&&partialVisibilityGutter&&!notEnoughChildren?itemWidth-partialVisibilityGutter:itemWidth)+"px":"auto"},className:"react-multi-carousel-item "+(utils_1.getIfSlideIsVisbile(index,state)?"react-multi-carousel-item--active":"")+" "+itemClass},child)}))):null};exports.default=CarouselItems;