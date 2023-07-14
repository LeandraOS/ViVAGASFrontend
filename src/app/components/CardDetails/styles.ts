import styled from 'styled-components'
import { AppRegistrationOutlined, BookmarksOutlined, CalendarMonthOutlined, ContactMailOutlined, DesignServicesOutlined, PermContactCalendarOutlined, Psychology } from '@mui/icons-material'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.75rem;
  width: 300px;
  min-height: 260px;
  border-radius: 6px;
  background: #DCEEFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

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