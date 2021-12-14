import Activity from './Activity'

const View = () => {
    return <div>

        <Activity title={"Jungle"} loot={[
				{
					"id": "0df14141-2104-4f39-8a59-db791133e201",
					"weight": 50,
					"minimum": 1,
					"maximum": 1
				},
				{
					"id": "167819a8-7f48-4a00-87cc-2b77d7bdc87f",
					"weight": 10,
					"minimum": 1,
					"maximum": 1
				},
				{
					"id": "d3ac0e97-3d27-4ac4-b426-792f41c0370c",
					"weight": 10,
					"minimum": 1,
					"maximum": 1
				}
			]}/>
        


    </div>
}

export default View