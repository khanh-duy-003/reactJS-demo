import { useEffect, useState } from 'react';

const lessons = [
    {
        id: 1,
        name: "React"
    },
    {
        id: 2,
        name: "Java"
    },
    {
        id: 3,
        name: "Ruby"
    }
]
function ContentChat () {
    const [lessonId, setLessonId] = useState(1)

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick ={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContentChat