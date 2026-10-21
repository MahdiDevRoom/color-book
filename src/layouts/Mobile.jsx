import { Appbar, Main, Panel, View } from '@/components';

export default ({ children }) => {
  return (
    <>
      <Panel/>
      <View>
        <Appbar/>
        <Main> {children} </Main>
      </View>
    </>
  )
}
