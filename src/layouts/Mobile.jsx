import { Main, View } from '@/components';
import Appbar from '@/components/Appbar';

export default ({ children }) => {
  return (
    <>
      <View>
        <Appbar/>
        <Main> {children} </Main>
      </View>
    </>
  )
}
