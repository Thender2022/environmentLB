export default function EventsPage() {
    return (
        <div className="event-page-container">
            
            
            <h1 className="mb-3 text-lg font-bold">Book us for your Events!</h1>
            <form >
                <input
                    required
                    name="name"
                    placeholder="Name" 
                    className="input-bordered input mb-2 w-full"
                />
                <textarea
                    required
                    name="description"
                    placeholder="Description"
                    className="textarea-bordered textarea mb-2 w-full"
                />
                <input
                    required
                    name="Duration"
                    placeholder="3 Hour Minimum"
                    type="url"
                    className="textarea-bordered textarea mb-2 w-full"
                />
                
            </form>
        </div>
        
    )
}