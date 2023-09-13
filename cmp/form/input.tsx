import { FC } from 'react'
import { cns } from '../../common/util'
import { Props, State } from '../../oo'

interface Input_props<Value> extends Props {
  state: State<Value>
}

export
const Input: FC<Input_props<string>> = props =>
  <input
    className = {cns('basic_input', props.className)}
    value = {props.state.value}
    onChange = {e =>
      props.state.set(e.currentTarget.value)
    }
  />

const set_number = (set: (val: number) => void, raw_val: string) => {
  const result = Number(raw_val) // Number('0x123') == 291; Number('NaN') != NaN;
  if (result as unknown == raw_val)
    set(result)
  // 否则保持原值
}

export
/** 十进制数字输入框 */
const Number_input: FC<Input_props<number | null>> = ({ state, ...props }) =>
  <Input
    {...props}
    state = {{
      value: state.value === null ? '' : String(state.value),
      set: raw_val => {
        if (raw_val.length == 0)
          state.set(null)
        else
          set_number(state.set, raw_val)
      }
    }}
  />

export
/** 十进制数字输入框 */
const Number0_input: FC<Input_props<number>> = ({ state, ...props }) =>
  <Input
    {...props}
    state = {{
      value: String(state.value),
      set: raw_val => {
        if (raw_val.length == 0)
          state.set(0)
        else
          set_number(state.set, raw_val)
      }
    }}
  />
