import styled from 'styled-components'
import { AppRegistrationOutlined, BookmarksOutlined, CalendarMonthOutlined, ContactMailOutlined, DesignServicesOutlined, PermContactCalendarOutlined } from '@mui/icons-material'
import { MenuItem} from '@mui/material'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.75rem;
  width: fit-content;
  min-height: fit-content;
  border-radius: 6px;
  background: #DCEEFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    padding: 1.5rem;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: linear-gradient(#2878BE, #1C8CBA, #119DB6);
    border-right: solid;
    border-right-width: 6px;
    border-right-color: transparent;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }
`

export const CardTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  gap: 0.75rem;
  width: fit-content;
  min-height: fit-content;
  border-radius: 6px;
  background: #DCEEFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    padding: 1.5rem;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: linear-gradient(#2878BE, #1C8CBA, #119DB6);
    border-right: solid;
    border-right-width: 6px;
    border-right-color: transparent;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.02);
  }
`
export const WrapperTitle = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    width: fit-content;
    align-self: center;
    margin-bottom: 0.75rem;
    
`
export const Title = styled.h2`
  color: #2086B6;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; 
  text-align: end;
  margin: 0;
  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 14px;
  }
`

export const IconPsy = styled(PermContactCalendarOutlined)`
  color: #2086B6;
  font-size: 2rem;


`

export const IconRequisitos = styled(DesignServicesOutlined)`
  color: #2086B6;
  font-size: 2rem;

`


export const IconInfos = styled(AppRegistrationOutlined)`
  color: #2086B6;
  font-size: 2rem;
`

export const IconCalendar = styled(CalendarMonthOutlined)`
  color: #2086B6;
  font-size: 2rem;
`

export const IconTeacher = styled(ContactMailOutlined)`
  color: #2086B6;
  font-size: 2rem;
`

export const IconObs = styled(BookmarksOutlined)`
  color: #2086B6;
  font-size: 2rem;
`

export const TextArea = styled.ul`
  margin: 0;

`
export const ItemList = styled.li`
  color: #2086B6;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 12px;
    }

`
export const Date = styled.p`
  background: linear-gradient(270deg, #119DB6 0%, #1B8DBA 52.30%, #2878BE 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  line-height: 22px; 
`

export const UnderlinedText = styled.span`
  background: linear-gradient(270deg, #119DB6 0%, #1B8DBA 52.30%, #2878BE 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration-line: underline;
  text-decoration-color: #1B8DBA;
`

export const MenuCustom = styled(MenuItem)`
  color: #2086B6;
  font-size: 12px;
`