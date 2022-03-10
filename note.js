class Notes 
    private field notetaker

    function notes(string Notetaker) 
	notets.add(string Notetaker)

    function deletenote(string Notetaker) 
	notetaker.delete(string Notetaker)

    function notifyNotetaker() is
        foreach (notetaker in notetaker.of(eventType)) do
            notetaker.update(data)


interface Page 
    public field note: Notes
    function update(context)


class ConcreteNotetaker implements Page 
    private field note: string
    private field notetaker: string

    constructor ConcreteNotetaker(note, notetaker) 
        this.note = note
        this.notetaker = notetaker

    function update(context)
        system.notetaker(notetaker, replace('%s',conext,note))
