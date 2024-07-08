export default function AddEventPage() {
    return(
        <div>
            <h1 className="mb-3 text-lg font-bold">Add Event</h1>
            <form>
                <input
                    required
                    name="name"
                    placeholder="Event Name" 
                    className="input-bordered input mb-3 w-full"
                />
                <textarea 
                    required
                    name="description"
                    placeholder="Event Description"
                    className="textarea-bordered textarea mb-2 w-full"
                />
                <input
                    required
                    name="price"
                    placeholder="Entry Price"
                    type="number"
                    className="textarea-bordered textarea mb-2 w-full"
                />
                <input
                    required
                    name="imageUpload"
                    placeholder="Choose Image"
                    accept="image/*"
                    className="file-input mb-2 w-full"
                />
                <button className="btn btn-primary btn-block" type="submit">Add Event</button>
            </form>
        </div>
    )
}