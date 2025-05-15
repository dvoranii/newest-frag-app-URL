import * as S from './styles';
import type { Notes } from '../../../../types/fragrance';

interface NotesDisplayProps {
    notes?: Notes;
}

const NotesDisplay = ({ notes }: NotesDisplayProps) => {
    if (!notes) return null;

    return (
        <S.NotesColumn>
            <S.NotesSectionTitle>Note Breakdown</S.NotesSectionTitle>
            
            {notes.top.length > 0 && (
                <>
                    <S.NoteType>Top Notes</S.NoteType>
                    <S.NotesGrid>
                        {notes.top.map((note, index) => (
                            <S.NoteItem key={`top-${index}`}>
                                <S.NoteImage src={note.image} alt={note.name} />
                                <S.NoteName>{note.name}</S.NoteName>
                            </S.NoteItem>
                        ))}
                    </S.NotesGrid>
                </>
            )}

            {notes.middle && notes.middle.length > 0 && (
                <>
                    <S.NoteType>Middle Notes</S.NoteType>
                    <S.NotesGrid>
                        {notes.middle.map((note, index) => (
                            <S.NoteItem key={`middle-${index}`}>
                                <S.NoteImage src={note.image} alt={note.name} />
                                <S.NoteName>{note.name}</S.NoteName>
                            </S.NoteItem>
                        ))}
                    </S.NotesGrid>
                </>
            )}

            {notes.base && notes.base.length > 0 && (
                <>
                    <S.NoteType>Base Notes</S.NoteType>
                    <S.NotesGrid>
                        {notes.base.map((note, index) => (
                            <S.NoteItem key={`base-${index}`}>
                                <S.NoteImage src={note.image} alt={note.name} />
                                <S.NoteName>{note.name}</S.NoteName>
                            </S.NoteItem>
                        ))}
                    </S.NotesGrid>
                </> 
            )}
        </S.NotesColumn>
    );
};

export default NotesDisplay;