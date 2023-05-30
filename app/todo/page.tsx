'use client'
import { Table } from '@nextui-org/react';


export default function TodoList() {

    return (
        <div>
            <h1>Todo list</h1>
            <div>
                <Table>
                    <Table.Header>
                        <Table.Column>
                            Name
                        </Table.Column>
                        <Table.Column>
                            Description
                        </Table.Column>
                        <Table.Column>
                            Status
                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                Ankush 
                            </Table.Cell>
                            <Table.Cell>
                                Learning React JS 
                            </Table.Cell>
                            <Table.Cell>
                                NEW 
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}