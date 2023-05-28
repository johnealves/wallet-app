import styled, { css } from 'styled-components/native'
import { TextInput, ViewProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface IContainerProps extends ViewProps {
  hasError: boolean
  isFocused: boolean
  isFilled: boolean
}

interface ITextContainerProps extends ViewProps {
  hasError: boolean
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.View`
  flex-direction: row;
  height: ${RFValue(50)}px;
  margin-bottom: ${RFValue(10)}px;
  width: 85%;
`

export const IconContainer = styled.View<IContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
  border-top-left-radius: ${RFValue(5)}px;
  border-bottom-left-radius: ${RFValue(5)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  margin-right: ${RFValue(3)}px;
  width: ${RFValue(55)}px;

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE1};
  `}

  ${({ hasError}) => hasError && css`
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.COLORS.RED};
  `}
`

export const InputText = styled(TextInput)<ITextContainerProps>`
  border-top-right-radius: ${RFValue(5)}px;
  border-bottom-right-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  font-size: ${RFValue(12)}px;
  flex: 1;
  padding: 0 ${RFValue(10)}px;

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE1};
  `}

  ${({ hasError}) => hasError && css`
    border-bottom-color: ${({ theme }) => theme.COLORS.RED};
  `}
`