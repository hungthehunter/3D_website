/*
"useState": lưu trữ dữ liệu và tự tay thay đổi
"userReducer":
- syntax: const [state,dispatch] = useReducer(reducer, initialstate)
"useMemo": dùng để  lưu trữ tránh bị render
 */

import React, { createContext, memo, useCallback, useContext, useMemo, useReducer, useState } from 'react'
type Theme = "light" | "dark" | "system"

const ThemeContext = createContext<Theme>("light")

const getTheme = () => useContext(ThemeContext)

type ButtonProps = {
    onClick: ()=>void,
    label: string
}

const ChildeButton = memo(({onClick,label}: ButtonProps ) =>{
 return <button onClick={onClick}>{label}</button>
}
   
)


export default function PracticeReactPage() {

// useState
type State = {
    count: number,
}

const [state,setState] = useState<State>({count: 0})

// useReducer
type ReducerType =  {
    count: number
}

type ReducerAction =  {action: "reset"}| {action: "increase"} | {action: "decrease"}


let initialState: ReducerType = {count: 0}

function reducerDispatch(state: ReducerType ,action: ReducerAction): ReducerType {
    switch(action.action){
        case "reset":
            return initialState;
        case "increase":
            return {...state, count: state.count +1}
        case "decrease":
            return {...state,count: state.count -1}
        default:
            throw Error ("cannot found action")
    }
}

const [reducerState,dispatch] = useReducer(reducerDispatch,initialState)

// useMemo
const [number,setNumber] = useState<number>(0);

const expensiveCaculation = (num: number): number => {
console.log("caculation")
for(let i=0;i<100000;i++){

}
return num*2
}


const useMemoFunction = useMemo(()=>{
return expensiveCaculation(number)
},[number])

// useContext


const [theme,useTheme] = useState<Theme>("dark")

// useCallBack
const [callBack,setCallBack] = useState(0);
const handleCallBack = useCallback(() => {
    setCallBack(prev=>prev+1)
},[])

  return (
    <>
    <div>
        <button onClick={()=>setState({count: state.count + 1})}>add more value for useState {state.count}</button>
    </div>
    <br/>
    <div>
        <h1>Count reducer {reducerState.count}</h1>
        <button onClick={() => dispatch({action: "increase"})}>add reducer</button>
    </div>
    <div>
        <h1>Count renderNumber {number}</h1>
        <button onClick={()=> setNumber(number+1)}>useMemo function</button>
    </div>

    <ThemeContext.Provider value={theme}>
        <MyComponent/>
    </ThemeContext.Provider>
    <div>
        <ChildeButton label= "use this useCallBack" onClick={handleCallBack} />
    </div>
    </>
    
  )
}




function MyComponent(){
        const theme = getTheme()
    return (
        <>
        <button>this is theme: {theme}</button>
        </>
    )
}