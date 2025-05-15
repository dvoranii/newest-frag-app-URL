import { styled } from "styled-components";
import { SectionTitle } from "../AccordsDisplay/styles";

export const NotesColumn = styled.div`
  flex: 1;
  min-width: 33%;
  background-color:#ffffff;
  padding: 1rem;
  border-radius: 20px;
`;

export const NotesSectionTitle = styled(SectionTitle)`
  text-align: center;
`

export const NoteType = styled.h3`
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 600;
  color: #334155;
  margin: 1.5rem 0 0.75rem 0;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid grey;
`;

export const NotesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const NoteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

export const NoteImage = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const NoteName = styled.span`
  font-size: 0.75rem;
  font-family: sans-serif;
  margin-top: 0.5rem;
  color: #475569;
  text-align: center;
`;