import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperators from "./ternary-operator";
import ES5Function from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturns from "./implied-returns";
import ParensAndParams from "./function-parenthesis-and-parameters";
import WorkingWithArrays from "./working-with-arrays";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructuring";
import FunctionDestructing from "./function-destructing";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants />
          <VariableTypes />
          <BooleanVariables />
          <IfElse />
          <TernaryOperators />
          <ES5Function />
          <ArrowFunctions />
          <ImpliedReturns />
          <ParensAndParams />
          <WorkingWithArrays />
          <House />
          <Spread />
          <Destructing />
          <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript